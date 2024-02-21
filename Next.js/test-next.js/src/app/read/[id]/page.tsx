export default async function Read(props:any) {


    // 불러오기
      const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache: 'no-store'});
      const topic = await resp.json();

      console.log(props)
    console.log(topic)
    return (
        <div>
            <h2>{topic.title}</h2>
            <p>{topic.body}</p>
        </div>
    )
}