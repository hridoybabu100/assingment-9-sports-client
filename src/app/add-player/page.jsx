"use client";

import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddPlayers = () => {
  const router = useRouter();

  const onSubMit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const newdata = Object.fromEntries(formdata.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newdata),
    });

    const data = await res.json();

    if (data) {
      toast.success("Player added successfully 🚀");
      router.push("/sports");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] px-4 py-10 font-sans">

      <div className="w-full max-w-4xl">

        {/* Title */}
        <h2 className="mb-10 text-center text-5xl font-black tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Add New Player
        </h2>

        {/* Card */}
        <Card className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

          <form onSubmit={onSubMit} className="p-6 sm:p-10 space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div className="md:col-span-2">
                <TextField name="name" isRequired>
                  <Label className="text-gray-300 font-medium">
                    Player Name
                  </Label>
                  <Input
                    placeholder="Tamim Iqbal"
                    className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Team */}
              <Select name="team" isRequired className="w-full">
                <Label className="text-gray-300 font-medium">League Name</Label>

                <Select.Trigger className="rounded-2xl bg-white/5 border border-white/10 text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Indian Premier League (IPL)" textValue="Indian Premier League (IPL)">
                      Indian Premier League (IPL)
                    </ListBox.Item>
                    <ListBox.Item id="Bangladesh Premier League (BPL)" textValue="Bangladesh Premier League (BPL)">
                      Bangladesh Premier League (BPL)
                    </ListBox.Item>
                    <ListBox.Item id="International League T20 (ILT20)" textValue="International League T20 (ILT20)">
                      International League T20 (ILT20)
                    </ListBox.Item>
                    <ListBox.Item id="The Hundred" textValue="The Hundred">
                      The Hundred
                    </ListBox.Item>
                    <ListBox.Item id="The Major League Soccer (MLS)" textValue="Major League Soccer (MLS)">
                      Major League Soccer (MLS)
                    </ListBox.Item>
                    <ListBox.Item id="The La Liga" textValue="La Liga">
                      La Liga
                    </ListBox.Item>
                    <ListBox.Item id="Brazilian Série A" textValue="Brazilian Série A">
                      Brazilian Série A
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Country */}
              <Select name="country" isRequired className="w-full">
                <Label className="text-gray-300 font-medium">Country</Label>

                <Select.Trigger className="rounded-2xl bg-white/5 border border-white/10 text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Bangladesh" textValue="Bangladesh">Bangladesh</ListBox.Item>
                    <ListBox.Item id="India" textValue="India">India</ListBox.Item>
                    <ListBox.Item id="Australia" textValue="Australia">Australia</ListBox.Item>
                    <ListBox.Item id="EngLand" textValue="England">England</ListBox.Item>
                    <ListBox.Item id="Brazil" textValue="Brazil">Brazil</ListBox.Item>
                    <ListBox.Item id="Arjentina" textValue="Arjentina">Arjentina</ListBox.Item>
                    <ListBox.Item id="France" textValue="France">France</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Sports */}
              <TextField name="sports" isRequired>
                <Label className="text-gray-300 font-medium">
                  Sports Type
                </Label>
                <Input
                  placeholder="Cricket / Football"
                  className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                />
                <FieldError />
              </TextField>

              {/* Image */}
              <div className="md:col-span-2">
                <TextField name="image" isRequired>
                  <Label className="text-gray-300 font-medium">
                    Image URL
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://image-link.com/player.jpg"
                    className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                  <FieldError />
                </TextField>
              </div>

                 {/* Sports */}
              <TextField name="salary" isRequired>
                <Label className="text-gray-300 font-medium">
                  Salary
                </Label>
                <Input
                  placeholder="150000"
                  className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                />
                <FieldError />
              </TextField>
               {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the player..."
                    className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-2xl py-4 text-lg font-bold tracking-wide text-white bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95"
            >
              🚀 Add Player
            </Button>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddPlayers;