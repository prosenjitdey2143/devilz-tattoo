import { createContext, useContext, useState, type ReactNode } from 'react';
import { BookingModal } from '../components/BookingModal';

interface BookingContextType {
  openBooking: (artistName?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [artist, setArtist] = useState<string | undefined>(undefined);

  const openBooking = (artistName?: string) => {
    setArtist(artistName);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setArtist(undefined);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} artistName={artist} />
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
