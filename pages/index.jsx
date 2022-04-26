import Head from "next/head";
import styles from "../styles/Home.module.css";
import 'antd/dist/antd.css';
import { Button } from 'antd';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Application Tutorial</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Full Stack Application Tutorial</h1>
        <div >
        <Button type="primary" href="/demo" style={{margin:"20px",padding:"30px"}}>Demo Page</Button>
        </div>
      </main>
    </div>
  );
}
