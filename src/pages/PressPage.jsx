import React from "react";

const PressPage = () => {
  return (
    <div className=" mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Press</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center">
            <img src="/news.jpg" alt="Press" className="w-[200px] h-[150px] rounded-lg  md:max-w-[220px]  md:h-[150px]" />
          </div>
          <div>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id felis eget nisi eleifend feugiat. Donec fermentum diam sed leo fermentum, nec placerat enim tincidunt. Integer aliquam ex vel quam fringilla, in efficitur ligula ultricies. Vestibulum at placerat purus. Pellentesque luctus libero quis consequat convallis. Aliquam erat volutpat. Morbi nec dapibus lorem.
            </p>
            <p className="text-lg mb-4">
              Vestibulum in tellus vel turpis vestibulum fermentum eget a sem. Fusce feugiat nisi justo, at tristique velit tincidunt id. Sed ultrices efficitur dolor eget sollicitudin. In aliquet velit ac lacus volutpat mollis. Phasellus porttitor risus non ante mattis, vitae rhoncus est aliquet. Vestibulum non massa et orci congue suscipit.
            </p>
            <p className="text-lg mb-4">
              Etiam posuere volutpat sapien, eget tempor ligula feugiat nec. Nulla facilisi. Nam consequat nisi ut sem ultricies tempus. Integer feugiat erat vitae neque convallis sollicitudin. Cras varius augue ac ipsum sollicitudin volutpat. Vestibulum sollicitudin mauris eget lacinia vulputate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
