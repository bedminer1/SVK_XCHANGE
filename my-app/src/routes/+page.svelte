<script>
    export let data
    $: error = data.error
    $: exchangeData = data.exchangeData

    $: baseCurrency = data.baseCurrency
    $: targetCurrency = data.targetCurrency
</script>

<div>
    <form method="get" action="/">
        <input type="text" name="baseCurrency" placeholder="Base Currency" class="px-2 text-gray-700"/>
        <input type="text" name="targetCurrency" placeholder="Target Currency" class="px-2 text-gray-700"/>
        <button type="submit">Search</button>
    </form>
</div>

<div>
    {#if !exchangeData}
    <p>No data yet</p>
    {:else}
        <h1>{data.baseCurrency} to {data.targetCurrency}</h1>
        <h2>{exchangeData.data[targetCurrency].value} </h2>
    {/if}
</div>