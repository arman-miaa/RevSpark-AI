import { useGetProfileQuery } from "../../redux/features/users/userApi";


const HomePage = () => {
    const { data, isLoading, error } = useGetProfileQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Failed to load profile</p>;
  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {data?.data?.map((user) => (
          <li key={user._id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage