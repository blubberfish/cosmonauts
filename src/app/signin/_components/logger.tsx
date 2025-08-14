"use client"
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react';

export function Logger() {
  const [] = useState()
  useEffect(() => {
    getSession().then(console.log);
  }, [])
  return null;
}
