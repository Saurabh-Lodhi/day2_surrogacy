export interface CreateContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  preferredContact: string | null;
  message: string;
}
