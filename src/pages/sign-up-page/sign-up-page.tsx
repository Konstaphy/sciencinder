import "./sign-up-page.css";
import { FullscreenSection } from "../../shared/ui/fullscreen-section/fullscreen-section";
import { Input } from "../../shared/ui/input/input";

export const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <FullscreenSection
        buttonText="Зарегистрироваться"
        onClick={() => alert()}
      >
        <Input title="Имя" required placeholder="Введите ваше имя" />
        <Input title="Фамилия" required placeholder="Введите вашу фамилию" />
        <Input title="Отчество" placeholder="Введите ваше отчество" />
        <Input
          title="Специальность"
          required
          placeholder="Программная инженерия"
        />
        <Input
          title="Должность"
          placeholder="Руководитель образовательной программы бакалавриата"
        />
        <Input
          title="Академическая группа"
          placeholder="Введите вашу академ группу, например: РИ-101010"
        />
      </FullscreenSection>
    </div>
  );
};
