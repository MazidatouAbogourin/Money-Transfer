'use client'
import React from 'react';
import {Pane, Spinner} from "evergreen-ui";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={400}
        >
            <Spinner />
        </Pane>
)
}