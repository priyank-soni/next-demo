import { createClient } from "contentful"

const client = createClient({
    space:'647u0jaqm0hm',
    accessToken:'wna8D3AUDLWicpC-yfB-a1jmImxF15Lss0BLhf6ajAI'
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type:'blog'
    });
   
    const paths = res.items.map(item => {
        return {
            params: { slug : item.fields.slug}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const {items} = await client.getEntries({
        content_type:'blog',
        'fields.slug': params.slug
    });

    return{
        props: { blog : items[0] }
    }
}

export default function BlogDetails({blog}){
    return(
        <>
        <div>Blog Details</div>
        <h1>{blog.fields.title}</h1>
        <br/>
        <p>{blog.fields.description}</p>
        </>
    )
}