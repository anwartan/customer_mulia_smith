import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Wishlist, { WishlistItem } from "../../pages/wishlist";
import HttpService from "../../services/http.service";
import apiUrls from "../../config/ApiUrls";
import { useFetch } from "../UseFetch";
import { Callback } from "../types";

interface WishlistContextValue {
  wishlist: Array<WishlistItem>;
  updateWishlist: (sku: string) => void;
}

interface Props {
  children: ReactNode;
}

export const WishlistContext = createContext<WishlistContextValue>({
  wishlist: [],
  updateWishlist: () => {},
});

export const useWishlistContext = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }: Props) => {
  const [wishlist, setWishlist] = useState<Array<WishlistItem>>([]);

  const handleGetWishlist = async () => {
    try {
      const response = await HttpService.get(apiUrls.wishlist);
      const { meta, data } = response.data;
      setWishlist(data.items);
    } catch (error) {}
  };

  const updateWishlist = async (item: string) => {
    try {
      const response = await HttpService.get(apiUrls.addWishlist + "/" + item);
      const { data, meta } = response.data;
      await handleGetWishlist();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, updateWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
