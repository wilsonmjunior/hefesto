type FormData = {
  name: string;
  age: string;
};

export default function Page() {
  async function onSave(formData: unknown[]) {
    'use server';
    console.log('onSave', formData)
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
        <input name="name" className="mt-1 py-3 px-5 border rounded-md" type="text" />
      </div>

      <div className="col-span-4 flex flex-col">
        <label htmlFor="label-age">Age</label>
        <input name="age" className="mt-1 py-3 px-5 border rounded-md" type="text" />
      </div>

      <div className="col-span-3 self-end">
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
      </div>
    </form>
  );
}

// const TWO_MINUTES = 2 * 60;
// next: { tags: ['posts'], revalidate: TWO_MINUTES }

// revalidateTag('posts')
// redirect('/posts')
