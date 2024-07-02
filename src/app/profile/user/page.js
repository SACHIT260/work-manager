export default function UserProfile() {
//   return <h1>This is normal user proflie</h1>;
// }
return (
  // <div style={{ padding: '2rem' }}>
  //   <h1>Welcome to Work Manager</h1>
  //   <p>
  //     Work Manager is your one-stop solution for managing tasks efficiently. 
  //     With our app, you can easily add new tasks, delete completed or unnecessary tasks, and keep track of your work.
  //   </p>
  //   <h2>Features:</h2>
  //   <ul>
  //     <li><strong>Add Task:</strong> Quickly add new tasks to your to-do list.</li>
  //     <li><strong>Delete Task:</strong> Remove tasks that are completed or no longer needed.</li>
  //     <li><strong>Login:</strong> Securely log in to access your personalized task list.</li>
  //     <li><strong>Sign Up:</strong> Create a new account to start managing your tasks.</li>
  //   </ul>
  //   <p>
  //     {/* Get started by <Link href="/signup"><a>signing up</a></Link> or <Link href="/login"><a>logging in</a></Link> if you already have an account. */}
  //   </p>
  // </div>




  <div className="flex flex-col min-h-screen bg-black">
      {/* <header className="bg-blue-600 text-white py-4"> */}
        <div className="container mx-auto px-4">
          {/* <h1 className="text-3xl font-bold">Work Manager</h1> */}
        </div>
      {/* </header> */}
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-black p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Welcome to Work Manager</h1>
          <p className="mb-6">
            Work Manager is your one-stop solution for managing tasks efficiently. 
            With our app, you can easily add new tasks, delete completed or unnecessary tasks, and keep track of your work.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Features:</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2"><strong>Add Task:</strong> Quickly add new tasks to your to-do list.</li>
            <li className="mb-2"><strong>Delete Task:</strong> Remove tasks that are completed or no longer needed.</li>
            <li className="mb-2"><strong>Login:</strong> Securely log in to access your personalized task list.</li>
            <li className="mb-2"><strong>Sign Up:</strong> Create a new account to start managing your tasks.</li>
          </ul>
          <p>
            {/* Get started by <Link href="/signup"><a className="text-blue-600 underline">signing up</a></Link> or <Link href="/login"><a className="text-blue-600 underline">logging in</a></Link> if you already have an account. */}
          </p>
        </div>
        </main>
      </div>
);
}

