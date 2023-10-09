'use client';

import { Notification } from '@/components';

export default function Home() {
  return (
    <>
      {/* <Form />
      <List /> */}

      <Notification.Root>
        <Notification.Icon icon="FaRocket" />
        <Notification.Content text="Doido" time="Há 2 minutos" type="Convite" />
        <Notification.Actions>
          <Notification.Action icon="HiCheck" onClick={() => {}} className="bg-green-500 hover:bg-green-400" />  
          <Notification.Action icon="HiX" onClick={() => {}} className="bg-red-500 hover:bg-red-400" />  
        </Notification.Actions>       
      </Notification.Root>
    </>
  );
}
 