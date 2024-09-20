// app/kalams/page.js

const page = async () => {
  // Fetch data directly in the component
  const res = await fetch('https://razeillahi.vercel.app/api/kalam', {
    next: { revalidate: 10 },  // Optional: Cache control (revalidates every 10 seconds)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const kalams = await res.json();

  return (
    <div>
      <h1>All Kalams</h1>
      <ul>
        {kalams.data.map(kalam => (
          <li key={kalam.id}>
            {kalam.letter}: {kalam.content} (Poet ID: {kalam.poet_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
