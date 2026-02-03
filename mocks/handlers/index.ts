import { handlers as todoHandlers } from "./todo";
import { handlers as userHandlers } from "./user";

// 業務ごとにhandlerを分割して管理
// https://mswjs.io/docs/best-practices/structuring-handlers/#dealing-with-large-handlers
export const handlers = [...userHandlers, ...todoHandlers];
