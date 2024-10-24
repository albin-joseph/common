import { Subjects } from "./subjects";

export interface ExpirationCompleteEvent {
    subjest: Subjects.ExpirationComplete;
    data: {
        orderId: string
    }
}