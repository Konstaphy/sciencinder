export type User = {
  name: string;
  surname: string;
  lastname: string;
  role: UserRole;
};

export enum UserRole {
  STUDENT = "Студент",
  EMPLOYEE = "Сотрудник",
  ADMIN = "Админинстратор",
}
