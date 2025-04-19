import { useFirestore } from "./useFirestore";

export const useUsers = () => {
  const { addData, getData, updateData, deleteData } = useFirestore();

  const addUser = async (
    name,
    email,
    password,
    lastname,
    age,
    gender
  ) => {
    return await addData("users", {
      email,
      password,
      name,
      lastname,
      age: Number(age),
      gender,
      createdAt: new Date().toISOString()
    });
  };

  const getUser = async (email) => {
    return await getData("users", email);
  };

  const updateUser = async (email, data) => {
    return await updateData("users", email, data);
  };

  const deleteUser = async (email) => {
    return await deleteData("users", email);
  };

  return {
    addUser,
    getUser,
    updateUser,
    deleteUser,
  };
};
