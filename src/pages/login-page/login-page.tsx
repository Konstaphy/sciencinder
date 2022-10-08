import "./login-page.css";
import { FullscreenSection } from "../../shared/ui/fullscreen-section/fullscreen-section";
import { Input } from "../../shared/ui/input/input";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <FullscreenSection buttonText="Войти" onClick={() => alert()}>
        <Input title="Имя" placeholder="Введите ваше имя" />
        <Input title="Фамилия" placeholder="Введите вашу фамилию" />
        <Input
          title="Академическая группа"
          placeholder="Введите вашу академ группу, например: РИ-101010"
        />
        <Input
          title="Академическая группа"
          placeholder="Введите вашу академ группу, например: РИ-101010"
        />
      </FullscreenSection>
    </div>
  );
};
