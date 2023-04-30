import { Socket, io } from "socket.io-client";
import { SocketEvent } from "./socket.enums";

export type FnListener = ((...args: any[]) => void) | (() => void);

const SOCKET_URL: Readonly<string> | undefined =
  process.env.NEXT_PUBLIC_SOCKET_SERVER_URL;
const RECONNECT_TIMEOUT: Readonly<number> = 1000;

class SocketClient {
  private static instance: SocketClient | null = null;
  private socket: Socket | null = null;

  private constructor() {
    this.connect();
  }

  private connect() {
    try {
      if (SOCKET_URL == undefined)
        throw new Error("[SOCKET-CLIENT] : SOCKET_URL undefined");
      this.socket = io(SOCKET_URL);
    } catch (error: unknown) {
      // NOTE : tod connect LOCALHOST:{PORT} by default
      this.socket = io();
      console.log(error);
    } finally {
      console.log(`[SOCKET-CLIENT] : open connection`);
      this.listeners();
    }
  }

  private listeners() {
    this.socket?.on(SocketEvent.CONNECT_ERROR, this.tryReconnect);
    this.socket?.on(SocketEvent.CONNECT, this.handleConnect);
    this.socket?.on(SocketEvent.DISCONNECT, this.handleDisconnect);
  }

  private tryReconnect() {
    console.log("[SOCKET-CLIENT] : connection failed");
    setTimeout(() => {
      console.log("[SOCKET-CLIENT] : try to reconnect");
      this.socket?.connect();
    }, RECONNECT_TIMEOUT);
  }

  private handleConnect() {
    console.log("[SOCKET-CLIENT] : connected successfully");
  }

  private handleDisconnect() {
    console.log("[SOCKET-CLIENT] : disconnected from server");
  }

  public static createConnection() {
    if (SocketClient.instance == null) {
      SocketClient.instance = new SocketClient();
    }

    return SocketClient.instance;
  }

  public disconnect() {
    this.socket?.disconnect();
  }

  public on(event: SocketEvent, listener: FnListener): this {
    this.socket?.on(event, listener);
    return this;
  }

  public emit<T extends any = any>(event: SocketEvent, payload: T): this {
    this.socket?.emit(event, payload);
    return this;
  }
}

namespace SocketClient {
  export const Event = SocketEvent;
}

export { SocketClient };
