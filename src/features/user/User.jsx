import { Link } from "react-router";

import PageNav from "../../ui/PageNav";
function User() {
  return (
    <>
      <PageNav />

      <section className="bg-zinc-50 py-[50px]">
        <UserInfo />
      </section>
    </>
  );
}
function UserInfo() {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col items-start justify-start gap-[20px] rounded-lg border-[0.01px] border-stone-700 bg-white px-[25px] py-[30px] shadow-md">

      <div className="flex w-full items-center justify-between gap-x-10">
       
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-md font-semibold text-stone-700">User Name</h2>
          <p className="text-sm text-stone-400">User@gmail.com</p>
        </div>
        <div className="justify-items-end">
          <Link
            type="log-out"
            className="text-md place-items-start bg-transparent px-2 py-1 no-underline"
          >
            <p>Logout</p>
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <h4 className="text-md capitalize text-stone-400">Your point</h4>
        <p className="text-sm text-stone-400">
          <strong className="text-sm text-stone-500">300.00</strong> points
        </p>
      </div>
      <hr className="mt-2 block w-full place-items-center border-t-[0.1px] border-stone-300"></hr>
      
      <div className="px-[8px] py-[5px]">
 
        <h3 className="mb-[10px] text-lg">Account Details</h3>
        <form action="">
          <div className="flex flex-col gap-2">
           
            <label className="font-sembold mt-2 text-sm">Name</label>
            <input
              type="text"
              placeholder="Demo User"
              className="w-[300px] overflow-hidden rounded-md border-[0.1px] py-2 text-center text-stone-500"
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sembold mt-2 text-sm">Email</label>
            <input
              type="number"
              placeholder="User@gmail.com"
              className="w-[300px] overflow-hidden rounded-md border-[0.1px] py-2 text-center text-stone-500"
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sembold mt-2 text-sm">Member Since</label>
            <input
              type="number"
              placeholder="December 2020"
              className="300 w-[300px] overflow-hidden rounded-md border-[0.1px] py-2 text-center text-stone-700 outline-none"
              disabled
            />
          </div>
        </form>
      </div>
      <hr className="mt-2 block w-full place-items-center border-t-[0.1px] border-stone-300"></hr>
      <div className="px-[8px] py-[5px]">
      
        <h3 className="mb-[10px] text-lg">Order History</h3>
        <p className="text-sm text-stone-400">You haven't place order yet</p>
      </div>
    </div>
  );
}

export default User;
