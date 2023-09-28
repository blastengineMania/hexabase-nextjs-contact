import Head from 'next/head';
import styles from '../styles/Home.module.css';
import client, { Project } from './hexabase';

import { useState, useEffect } from 'react';

// フォーム入力データの型
type formData = {
  company: string;
  name: string;
  email: string;
  type: string;
  message: string;
};

// フォームの選択肢の型
type SelectOption = {
  label: string;
  value: string;
};

export default function Home() {
  // フォームの初期値
  const defaultValue: formData = {
    company: '',
    name: '',
    email: '',
    type: '',
    message: '',
  };
  // フォームの状態を管理
  const [form, setForm] = useState<formData>(defaultValue);
  // フォームの選択肢を管理
  const [options, setOptions] = useState<SelectOption[]>([]);
  // プロジェクトの状態を管理
  const [project, setProject] = useState<Project>(null);

  const initialize = async () => {
    // パブリックトークンをセット
    await client.setToken(process.env.NEXT_PUBLIC_PUBLIC_TOKEN!);
    // 利用するワークスペースをセット
    await client.setWorkspace(process.env.NEXT_PUBLIC_WORKSPACE_ID!);
    // 利用するプロジェクトをセット
    const project = await client.currentWorkspace.project(
      process.env.NEXT_PUBLIC_PROJECT_ID!
    );
    // プロジェクトはuseStateを使って更新
    setProject(project);
    // 利用するデータストアをセット
    const datastore = await project.datastore(
      process.env.NEXT_PUBLIC_DATASTORE_ID!
    );
    // フィールドデータを取得
    const field = await datastore.field('type');
    // フィールドデータから選択肢を取得
    const options = await field.options();
    // フォームの初期値をセット
    setForm({ ...form, ...{ type: options[0].id } });
    // 選択肢をセット
    setOptions(
      options.map((option) => {
        return {
          value: option.id,
          label: option.value.ja,
        };
      })
    );
  };

  // フォームの送信処理
  const send = async (e) => {
    e.preventDefault();
    // プロジェクトからデータストアを取得
    const datastore = await project.datastore(
      process.env.NEXT_PUBLIC_DATASTORE_ID!
    );
    // データストアからフィールドデータを取得
    const field = await datastore.field('type');
    // フィールドデータから選択肢を取得
    const options = await field.options();
    // フォームの選択肢から選択されたものを取得
    const option = options.find(option => option.id === form.type);
    // データストアからアイテムを作成
    const item = await datastore.item();
    // アイテムにフォームの値をセットして保存
    await item
      .set('company', form.company)
      .set('name', form.name)
      .set('type', option.id)
      .set('email', form.email)
      .set('message', form.message)
      .save();
    // フォームの初期値に戻す
    alert('送信しました');
    setForm(defaultValue);
  };

  // 初期化処理を実行
  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>お問い合わせ</title>
        </Head>

        <main className={styles.main}>
          <h3 className={styles.title}>お問い合わせ</h3>
          <form className="container" onSubmit={send}>
            <div className="company block">
              <label htmlFor="frm-company">会社名</label>
              <input
                id="frm-company"
                type="text"
                value={form.company}
                autoComplete="company"
                onChange={(e) =>
                  setForm({ ...form, ...{ company: e.target.value } })
                }
                required
              />
            </div>
            <div className="account block">
              <label htmlFor="frm-name">名前</label>
              <input
                id="frm-name"
                type="text"
                value={form.name}
                autoComplete="name"
                onChange={(e) =>
                  setForm({ ...form, ...{ name: e.target.value } })
                }
                required
              />
            </div>
            <div className="email block">
              <label htmlFor="frm-email">メールアドレス</label>
              <input
                id="frm-email"
                type="email"
                value={form.email}
                autoComplete="email"
                onChange={(e) =>
                  setForm({ ...form, ...{ email: e.target.value } })
                }
                required
              />
            </div>
            <div className="block type">
              <label htmlFor="frm-type">お問い合わせ種別</label>
              <select
                onChange={(e) =>
                  setForm({ ...form, ...{ type: e.target.value } })
                }
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="message block">
              <label htmlFor="frm-message">Message</label>
              <textarea
                id="frm-message"
                rows={6}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, ...{ message: e.target.value } })
                }
              >
              </textarea>
            </div>
            <button onClick={send}>送信</button>
          </form>
        </main>
      </div>
    </>
  );
}
