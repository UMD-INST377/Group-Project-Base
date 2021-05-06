import java.util.Arrays;
public class Pakudex
{
    private int size, capacity;
    Pakuri[] array; // to create an array to keep track of multiple elements

    public Pakudex()
    { array = new Pakuri[20]; }

    public Pakudex(int capacity)
    { array = new Pakuri[capacity]; }

    public int getSize()
    { return size; }

    public int getCapacity()
    { return capacity; }

    public String[] getSpeciesArray()
    {
        String listOfPakuri[] = new String[size]; //initialize the array listOfPakuri[]
        for (int i = 0; i < size; i++)
            listOfPakuri[i] = array[i].getSpecies();
        if (listOfPakuri == null)
            return null;
        return listOfPakuri;
    }

    public int[] getStats(String species)
    {
        int arr[] = new int[3];
        for (int i = 0; i < arr.length; i++)
        {
            if (array[i].getSpecies().equals(species)) //checking the String value if matches
            {
                arr[0] = array[i].getAttack();
                arr[1] = array[i].getDefense();
                arr[2] = array[i].getSpeed();
                return arr; //If one value is found, the entire array is returned.
            }
        }
            return null;
    }

    public void sortPakuri()
    {
        Arrays.sort(array);
    }

    public boolean addPakuri(String species) //the new name of the species added
    {
        Pakuri newSpecies = new Pakuri(species); //new object
        for (int i = 0; i < size; i++) //Size to keep track of the pakuri
        {
            if (array[i].getSpecies().equals(species))
                return false;
        }
        if (size < capacity)
        {
            array[size] = newSpecies;
            size++;
            return true;
        }
        return false; //return false if it goes beyond the capacity
    }

    public boolean evolveSpecies(String species)
    {
        for (int i = 0; i < size; i++)
        {
            if (array[i].getSpecies().equals(species))
            {
                array[i].evolve();
                return true;
            }
        }
        return false;
    }
}