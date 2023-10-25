import json
import time
import random

# Function to load JSON data from a file
def load_json(filename):
    with open(filename, 'r') as file:
        data = json.load(file)
    return data

# Function to save JSON data to a file
def save_json(filename, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)

# Function to add a new data point to a specific id
def add_data_point(data, id_to_update, new_x, new_y):
    for entry in data:
        if entry["id"] == id_to_update:
            entry["data"].append({"x": new_x, "y": new_y})
            return True
    return False

def remove_entry_by_id_and_x(data, id_to_remove, x_to_remove):
    updated_data = []
    entry_removed = False

    for entry in data:
        if entry["id"] == id_to_remove:
            filtered_data = [point for point in entry["data"] if point["x"] != x_to_remove]

            if filtered_data:
                entry["data"] = filtered_data
                updated_data.append(entry)
            else:
                entry_removed = True
        else:
            updated_data.append(entry)

    return updated_data, entry_removed


# JSON file name
json_file = 'mockData.json'

# Load JSON data
json_data = load_json(json_file)

# Display current JSON data
print("Current JSON Data:")
print(json_data)

# Get user input
#id_to_update = input("Enter the id to update: ")
#new_x = input("Enter the new x value to add: ")
#new_y = input("Enter the new y value to add: ")

new_x = 0;
id_to_update = "Sensor-1"
step = 1;
while True:
 time.sleep(0.1)
 if (new_x >= 60):
  json_data = remove_entry_by_id_and_x(json_data, id_to_update, (new_x - (60 * step)))
 if (new_x == 60*step):
  step+=1
 new_x+=1
 
 new_y = random.randint(20, 140)
 # Add a new data point
 if add_data_point(json_data, id_to_update, new_x, new_y):
    save_json(json_file, json_data)
    print(f"New data point (x: {new_x}, y: {new_y}) added to {id_to_update}")
 else:
    print(f"{id_to_update} not found in JSON data")

# Display updated JSON data
print("Updated JSON Data:")
print(json_data)