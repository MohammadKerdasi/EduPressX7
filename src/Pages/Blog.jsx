// import React from "react";
import BlogDtails from "../Components/BlogDetails/BlogDetails";

// export default function Blog() {
//   return <BlogDtails />;

// import React from 'react'
import "./../index.css";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";

export default function Blog() {
  /*لاتعدلي ----------------------------------------- */
const [searchBox, setSearchBox] = useState("");

const handleSearchChange = (value) => {
  setSearchBox(value);
};
/*-------------------------------------------------------------------- */


// عدلي حسب الفلاتر يلي بال saidbar______________________________________________________________________________________________
const filteredRecords =Service1.filter((val) => {   /* من هاد السطر
 */    if (searchBox === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchBox.toLowerCase())) {
      return val;
    }
    return null;
  });   /* لهاد لا تعدلي */

  return (
    <div>
      <BreadCrumbs />
      <div className="Project-Container">
        {/* <h1>hi from Blog</h1> */}
        <BlogDtails />
      </div>
    </div>
  );
}
