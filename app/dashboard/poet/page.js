// app/kalams/page.js

const KalamList = async () => {
  // Fetch data directly in the component
  const res = await fetch('https://razeillahi.vercel.app/api/poets');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const kalams = await res.json();
  console.log(kalams);

  return (
    <div>
      <h1>All poets</h1>
      <ul>
        {kalams.data.map(kalam => (
          <li key={kalam.id}>
            {kalam.name} ID: {kalam.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KalamList;
