import Head from 'next/head'

import { Tab } from '@/components/common/Tab'
import { Modal } from '@/components/common/Modal'
import { Button } from '@/components/common/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Modal />
        <Tab />

        <Button>
          Salvar
        </Button>
      </main>
    </>
  )
}
