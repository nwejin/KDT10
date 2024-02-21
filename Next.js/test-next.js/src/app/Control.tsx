"use client"

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export function Control() {
  const params = useParams();
  const router = useRouter();


  console.log(params.id)
  const id = params.id
  const url = `/update/${id}`

  const deleteData = () => {
    const options = {method: 'DELETE'}
    fetch(`http://localhost:9999/topics/${id}`, options)
    .then(res => res.json())
    .then(result => {
      router.push('/');
      router.refresh();
  
    })
  }

  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? <>
           <li><Link href={url}>Update</Link></li>
      <li><input type="button" value="delete" name="" id="" onClick={deleteData}/></li>
      </> : null }
    </ul>
  );
}
