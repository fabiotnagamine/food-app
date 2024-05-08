import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
    return ( 
        <div className="flex gap-2 pt-5 px-5">
            <Input placeholder="Search restaurants" className="border- bg-slate-200" />
            <Button size="icon">
                <SearchIcon size={20} />
            </Button>
        </div>
     );
}
 
export default Search;