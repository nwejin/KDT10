"use client"
import { create } from "domain";
import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();

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
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(`http://localhost:9999/topics`, options)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const lastid = result.id;
                router.refresh(); // 글이 저장되면 새로고침 (서버 컴포넌트 리프레시)
                router.push(`/read/${lastid}`)
            })
       }}>
        <p>
            <input type="text" name="title" id="" placeholder="title"/>
        </p>
        <p>
            <textarea name="body" id="" cols={30} rows={10}></textarea>
        </p>
        <p>
            <input type="submit" name="" id="" value="create" />
        </p>
       </form>
    )
}