"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    // id 값 가져오기
    const params = useParams();
    console.log('params>', params)
    const id = params.id
    console.log('updateid >', id)
    
    useEffect(() => {
        fetch(`http://localhost:9999/topics/${id}`).then(res => res.json()).then(result=>{
        setTitle(result.title)
        setBody(result.body)    
        console.log("result.title >",result.title)
        console.log("result",result)})
 
    },[])

    type Topic = {
    id: number;
    title: string;
    body: string;
  }
    return (
       <form action="" onSubmit={(e:any)=> {
        //onSubmit 실행시 기본 동작 방지
            e.preventDefault();
        // form 태그 내용 불러오기
            const title = e.target.title.value;
            const body = e.target.body.value
            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(`http://localhost:9999/topics/${id}`, options)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const lastid = result.id;
                router.refresh(); // 글이 저장되면 새로고침 (서버 컴포넌트 리프레시)
                router.push(`/read/${lastid}`)
            })
       }}>
        <p>
            <input type="text" name="title" id="" placeholder="title" value={title} onChange={e=>setTitle(e.target.value)}/>
        </p>
        <p>
            <textarea name="body" id="" cols={30} rows={10}  value={body} onChange={e=>setBody(e.target.value)}></textarea>
        </p>
        <p>
            <input type="submit" name="" id="" value="update" />
        </p>
       </form>
    )
}