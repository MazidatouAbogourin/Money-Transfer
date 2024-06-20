'use client'
import React from 'react';
import { Table } from 'evergreen-ui';
const MainHistory = ({data}: any) => {
  console.log(data)
  return (
    <>
      <Table width="80%" style={{margin: '100px auto'}}>
  <Table.Head>
    <Table.TextHeaderCell> Type </Table.TextHeaderCell>
    <Table.TextHeaderCell> Amount send</Table.TextHeaderCell>
    <Table.TextHeaderCell>Status</Table.TextHeaderCell>
    <Table.TextHeaderCell>Receiver/Sender</Table.TextHeaderCell>
    <Table.TextHeaderCell>Balance</Table.TextHeaderCell>
  </Table.Head>
  <Table.Body height={240}>
    {data.map((profile: any) => (
      <Table.Row key={profile.TrackingNumber} isSelectable onSelect={() => console.log('hello')
      }>
        <Table.TextCell >{profile.type||'Receiver'}</Table.TextCell>
        <Table.TextCell>{'$'+profile.AmountSend}</Table.TextCell>
        <Table.TextCell>{profile.Status}</Table.TextCell>
        <Table.TextCell>{profile.type=='sending'?profile.receiverUserName: profile.SenderUserName}</Table.TextCell>
        <Table.TextCell>{profile.type=='sending'? profile.SenderNewBalance:  profile.ReceiverNewBalance}</Table.TextCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>

      
    </>
  )
}

export default MainHistory
