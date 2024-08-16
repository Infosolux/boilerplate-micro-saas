'use client';

import * as React from 'react';
import io, { Socket } from 'socket.io-client';

interface ISocketContext {
  socket: Socket;
}

const socketIo = io(process.env.NEXT_PUBLIC_WS_URL as string, {
  path: '/ws',
  transports: ['websocket'],
  autoConnect: false,
});

const SocketContext = React.createContext<ISocketContext>({ socket: socketIo });

export const useSocket = () => {
  const context = React.useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context.socket;
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = React.useState<Socket | null>(null);

  React.useEffect(() => {
    // Verifica se a URL WebSocket está definida no ambiente
    if (!process.env.NEXT_PUBLIC_WS_URL) {
      console.error('NEXT_PUBLIC_WS_URL is not defined');
      return;
    }

    socketIo.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socketIo.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socketIo.on('error', (error: any) => {
      console.error('Socket error:', error);
    });

    socketIo.connect();

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket: socketIo }}>{children}</SocketContext.Provider>;
};
