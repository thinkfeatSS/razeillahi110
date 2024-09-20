// app/kalams/page.js

import axios from "axios";

const page = async () => {
  try {
    // Make the API call using Axios
    const res = await axios.get("https://razeillahi.vercel.app/api/alphabet", {
      // Optional: You can configure Axios cache headers here (Next.js specific headers like revalidate aren't directly supported in Axios)
    });

    const alphabet = res.data;

    return (
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1>All alphabet</h1>
          <ul>
            {alphabet.data.map((_) => (
              <li key={_.id}>
                {_.letter} - {_.id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch data with Axios", error);
    return <p>Failed to load data</p>;
  }
};

export default page;
