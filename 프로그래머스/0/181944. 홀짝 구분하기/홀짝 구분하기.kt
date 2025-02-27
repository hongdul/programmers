fun main(args: Array<String>) {
    val a = readLine()!!.toInt()
    val isEven = if(a % 2 == 0) "even" else "odd"
    
    println("$a is $isEven")
}