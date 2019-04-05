// se importa paquete JOptionPane para dibujar un cuadro de dialogo en pantalla
// que muestre información o para llenar información 
import javax.swing.JOptionPane;

public class Main
{
    public static void main(String[] args)
    {
        // se crea un objeto de la clase Convertir (Instanciación) 
        Convertir obj = new Convertir();
        // pedimos el año 
        int a = Integer.parseInt(JOptionPane.showInputDialog(null, "Digite el año"));
        // se encapsula la variable a  
        obj.setYear(a);
        // se muestra en pantalla el año y el siglo donde se encuentra 
        JOptionPane.showMessageDialog(null,
            "Año: " + obj.getYear() + "\n" +
            "Siglo: " + obj.sigloDeAño());
    }
}