export interface Enquiry {
  enquiryId: number;
  enquiryTypeId: number;
  enquiryStatusId: number;
  customerName: string;
  email?: string;
  message: string;
  createdDate: Date;
  resolution?: string;
  mobileNo?: string;
}