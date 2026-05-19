import { Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from "@heroui/react";

const AddPlayers = () => {
  return (
    <div className="w-[40%] mx-auto">

        <div className="">
            <h2 className="text-4xl font-bold text-black my-6">Add Player</h2>
        </div>
      <Card>
        <form className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Player Name</Label>
                <Input placeholder="Tamim Iqbal" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Team */}
          {/* team - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select Team"
              >
                <Label>Team</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                     Royal Challengers Bengaluru
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                     Bangladesh National Team
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                     Bangladesh National Team
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                     Los Angeles Lakers
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                    Inter Miami
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                     Chennai Super Kings
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select Country"
              >
                <Label>Country</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Bangladesh
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      India
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      Pakisthan
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Australia
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      NewZiland
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      England
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="150000" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Sports</Label>
              <Input placeholder="sports" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
        

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
           
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
          
            className="rounded-none w-full bg-linear-to-r from-cyan-500 to-blue-600 text-black"
          >
           Add Palyer
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddPlayers;
