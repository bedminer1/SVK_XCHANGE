<script>
    export let data
    $: exchangeData = data.exchangeData

    $: baseCurrency = data.baseCurrency
    $: targetCurrency = data.targetCurrency

    let amount = 100
    $: calculatedAmount =(amount * parseFloat(exchangeData.data[targetCurrency].value)).toFixed(2)
</script>

<div>
    <form method="get" action="/">
        <input type="text" name="baseCurrency" placeholder="Base Currency" class="px-2 text-gray-700"/>
        <input type="text" name="targetCurrency" placeholder="Target Currency" class="px-2 text-gray-700"/>
        <input type="numeric" name="amount" placeholder="Amount" class="px-2 text-gray-700" bind:value={amount}/>
        <button type="submit">Search</button>
    </form>
</div>

<div>
    {#if !exchangeData}
    <p>No data yet</p>
    {:else}
        <h1>{data.baseCurrency} to {data.targetCurrency}</h1>
        <h4>{exchangeData.data[targetCurrency].value.toFixed(4)} {data.targetCurrency}/{data.baseCurrency}</h4>
        <h4>{amount}{baseCurrency} converts to {calculatedAmount} {targetCurrency}</h4>
    {/if}
</div>