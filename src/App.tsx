import "./App.css";
import CardHead from "./components/form/title";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import CardFoot from "./components/form/footer";
import InputField from "./components/form/input";

function App() {
  return (
    <>
      <div className="h-[80vh] flex">
        <Card className="w-[80vw] m-auto sm:w-[75vw] md:w-[60vw] lg:w-[50vw] xl:w-[35vw]">
          <CardHead title="Login" description="login to access your details" />
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <InputField
                  label="Email Address"
                  id="email"
                  type="text"
                  placeholder="user@example.com"
                />
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFoot
            service="Login"
            link="register"
            link_text="SignUp"
            description="Not registered yet? ,"
          />
        </Card>
      </div>
    </>
  );
}

export default App;
