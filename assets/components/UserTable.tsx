'use client'
import React from 'react';
import { Table } from 'evergreen-ui';

function UserTable({data}: any) {
  return (
    <div>
        <Table width="80%" style={{margin: '100px auto'}}>
  <Table.Head>
    <Table.TextHeaderCell> Last Name </Table.TextHeaderCell>
    <Table.TextHeaderCell> First  Name</Table.TextHeaderCell>
    <Table.TextHeaderCell>UserName</Table.TextHeaderCell>
    <Table.TextHeaderCell>Email</Table.TextHeaderCell>
    <Table.TextHeaderCell>Balance</Table.TextHeaderCell>
  </Table.Head>
  <Table.Body height={240}>
    {data.map((profile: any) => (
      <Table.Row key={profile.userName} isSelectable onSelect={() => console.log('hello')
      }>
        <Table.TextCell >{profile.lastName}</Table.TextCell>
        <Table.TextCell>{profile.firstName}</Table.TextCell>
        <Table.TextCell >{profile.userName}</Table.TextCell>
        <Table.TextCell >{profile.Email}</Table.TextCell>
        <Table.TextCell isNumber>{profile.balance}</Table.TextCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
    </div>
  )
}

export default UserTable
