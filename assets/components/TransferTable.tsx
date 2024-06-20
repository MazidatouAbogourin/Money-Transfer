'use client';
import React from 'react';
import { Table } from 'evergreen-ui';

function TransferTable({data}: any) {
  return (
    <div>
       <Table width="80%" style={{margin: '100px auto'}}>
  <Table.Head>
    <Table.TextHeaderCell> Sender Name </Table.TextHeaderCell>
    <Table.TextHeaderCell> Receiver  Name</Table.TextHeaderCell>
    <Table.TextHeaderCell>Amount Send</Table.TextHeaderCell>
    <Table.TextHeaderCell>Status</Table.TextHeaderCell>
    <Table.TextHeaderCell>Code</Table.TextHeaderCell>
  </Table.Head>
  <Table.Body height={240}>
    {data.map((profile: any) => (
      <Table.Row key={profile.TrackingNumber} isSelectable onSelect={() => console.log('hello')
      }>
        <Table.TextCell >{profile.SenderUserName}</Table.TextCell>
        <Table.TextCell>{profile.receiverUserName}</Table.TextCell>
        <Table.TextCell >{profile.AmountSend}</Table.TextCell>
        <Table.TextCell >{profile.Status}</Table.TextCell>
        <Table.TextCell isNumber>{profile.TrackingNumber}</Table.TextCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
      
    </div>
  )
}

export default TransferTable
