import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const SkillEdit = () => {
  const { formValues, onChange, updateSkill, skill, getSkill, errors, setErrors } = useContext(SkillContext);
  let { id } = useParams();
  
  useEffect(() => {
    getSkill(id);
    setErrors({});
  }, []);
  
  return (
    <div className="mt-12">
      <form
        onSubmit={updateSkill}
        action=""
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
      >
        <div className="space y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              name="name"
              value={formValues["name"]}
              onChange={onChange}
            />
            {errors.name && (
              <span className="text-sm text-red-400">{errors.name[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="slug" className="block mb-2 text-sm font-medium">
              Slug
            </label>
            <input
              type="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              name="slug"
              value={formValues["slug"]}
              onChange={onChange}
            />
            {errors.slug && (
              <span className="text-sm text-red-400">{errors.slug[0]}</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
