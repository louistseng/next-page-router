import { useRef, useState, useContext } from "react";
import { signUp } from "../../lib/function";
import NotificationContext from "../../store/notification-context";

export default function UsersPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [register, setRegister] = useState<boolean>(false);
  const notificationCtx = useContext(NotificationContext);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    signUp(email, password, notificationCtx);
  }

  return (
    <>
      <h1>會員中心</h1>
      <button onClick={(e) => setRegister(false)}>會員登入</button>
      <button onClick={(e) => setRegister(true)}>會員註冊</button>
      <hr />
      {register ? (
        <div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label>
                Email:
                <input type="email" name="email" placeholder="請輸入Email" />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" name="password" placeholder="請輸入密碼" />
              </label>
            </div>
            <div>
              <input type="submit" value="註冊" />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label>
                Email:
                <input type="email" name="email" placeholder="請輸入Email" />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" name="password" placeholder="請輸入密碼" />
              </label>
            </div>
            <div>
              <input type="submit" value="登入" />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
