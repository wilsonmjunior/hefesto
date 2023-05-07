type User = {
  name: string;
  age: string;
}

interface UserParams extends FormData {
  get(keys: (keyof User)): string;
}

export default function Page() {
  async function onSave(formData: UserParams) {
    'use server';
    const userData = {
      name: formData.get('name'),
      age: formData.get('age'),
    }
    console.log('user data:: ', userData);
  }

  async function onDelete() {
    "use server"
    console.log('delete:: ');
  }

  return (
    <form
      action={onSave}
      className="grid
        grid-cols-12
        gap-2
        border
        rounded-xl
        p-10
        m-10
        shadow"
    >
      <div className="col-span-4 flex flex-col">
        <label htmlFor="label-name">Name</label>
        <input
          className="mt-1 py-3 px-5 border rounded-md"
          name="name"
          type="text"
        />
      </div>

      <div className="col-span-4 flex flex-col">
        <label htmlFor="label-age">Age</label>
        <input
          className="mt-1 py-3 px-5 border rounded-md"
          name="age"
          type="text"
        />
      </div>

      {/* <div>
        <input
          className="mt-1 py-3 px-5 border rounded-md"
          formAction=onDelete}
          type="image"
        />
      </div> */}

      <div className="col-span-4 space-x-2 self-end flex flex-row">
        <button
          type="submit"
          className="w-full
            py-3
            px-5
            rounded-lg
            bg-gray-600
            text-white
            hover:bg-gray-500
            transition-all
            ease-linear"
        >
          Save
        </button>

        <button
          className="w-full
            py-3
            px-5
            rounded-lg
            bg-red-600
            text-white
            hover:bg-red-500
            transition-all
            ease-linear"
          formAction={onDelete}
        >
          Delete
        </button>
      </div>
    </form >
  );
}

// const TWO_MINUTES = 2 * 60;
// next: { tags: ['posts'], revalidate: TWO_MINUTES }

// revalidateTag('posts')
// redirect('/posts')
