import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div>
        <Image src="/logo.png" alt="Fortune Tiger" width={152} height={48} />
      </div>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/hero.png" alt="Fortune Tiger" width={540} height={263} />
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
            <h2 className={averia.className}>
              Algo deu errado.
            </h2>

            <p>Tente novamente mais tarde.</p>
          </div>
        </div>
      </div>

      <div>
        <span className={styles.copy}>
          © 2023 Fortune Tiger
        </span>
      </div>

    </div>
  )
}
