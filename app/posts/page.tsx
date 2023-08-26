import Link from "next/link";

async function getPosts() {
    const result = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=10');
    const data = await result.json();
    return data?.items as any[];
}

export default async function PostsPage() {
    const posts = await getPosts();
    return (
        <div className="p-8">
            <p className="py-2 text-4xl font-extrabold">Posts</p>
            <p className="py-6 text-2xl font-semibold">A collection of articles, essays and thoughts I wanted to store and make accessible here.</p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
                {posts?.reverse().map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </div>
    );
}

function Post({ post }: { post: any }) {
    const { id, title, content, created, updated } = post || {};

    return (
        <Link href={`/posts/${id}`}>
            <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-2 transition ease-in-out delay-150 hover:scale-105">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-sm text-gray-700">Last updated at: {new Date(updated).toDateString()}</p>
                <p className="text-sm text-gray-700">Created at: {new Date(created).toDateString()}</p>
            </div>
        </Link>
    );
}