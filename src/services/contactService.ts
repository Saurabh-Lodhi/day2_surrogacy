import axios from "axios";
import { CreateContactRequest } from "../types/contact";

const API_BASE = import.meta.env.VITE_API_URL || "https://localhost:7116/api/v1.0";

export const saveContact = async (data: CreateContactRequest) => {
  const response = await axios.post(`${API_BASE}/contacts`, data);
  return response.data;
};
