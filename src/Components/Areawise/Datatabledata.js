import {useSelector} from "react-redux";

const Datatabledata=(id)=>{
  const data= useSelector((state) => state.Reducer.Category);
  console.log(data.Name);
  /**============only Objects must be placed ==================== */
  switch (id) {
    case 0:
      return(
        {
          "#": "#",
          center_ID: "1",
          shop: "virat",
          owner: "vishal",
          emailid: "vishal@test.com",
          lattitude: "79.5",
          longitude: "78.90",
          address: "shivajinagar pune",
          landmark: "sancheti hospital",
          state: "MAH",
          country: "IND",
          profile: "great",
          contact_verified: "yes",
          email_verified: "yes",
          verification_status: "yes",
          verification_date: "recent",
          deleted: "no",
          authorised: "yes",
          created_on: "today",
        }
      );
      break;
      case 1:
        return(
          {
            "#": "#",
            id: "1",
            category_name:(data.Nam ? data.Name : "No data"),
            type:(data.Place? data.Place : "No data"),
            options:(data.Options ? data.options: "No data"),
            icons_path:(data.Image ? data.Image : "No data"),
            deleted: "yes",
            authorised:"yes",
            created_on: "Today",
          }
        );
        break;
        case 2:
      return(
      {
        "#": "#",
        request_id: "erb",
        center_ID: "3",
        center_name: "brsesbz",
        name: "ae",
        contact_numbar: "dfb",
        emailid: "sklsskmf",
        lattitude: "mncmx",
        longitude: "mskfn",
        address: "s,fm,",
        landmark: "s,mf.df",
        state: "s,mfl",
        country: "ashh",
        profile_image: "sbjf",
        deleted: "sf",
        authorised: "sf",
        created_on: "sb",
      }
      );
      break;
      default:
        return(
          {
            Error:"No data Available"
          }
        )
  }
 
}
export default Datatabledata;