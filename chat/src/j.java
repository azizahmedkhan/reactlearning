String s = "ABBBCCDDCCC";
		int k = 3; // maximum characters can be removed
		String compressedString = "A3B4C";
		int expectedLength = 5;

		System.out.println("Compressed String for " + s + " is " + compressedString + " length of compressed string is "
				+ expectedLength);

		Map<Character, Long> map = s.chars().mapToObj(c -> (char) c).collect(Collectors.toList()).stream()
				.collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

		System.out.println(map);

		Optional<Entry<Character, Long>> entry = map.entrySet().stream()
				.sorted(Collections.reverseOrder(Comparator.comparing(Map.Entry::getValue))).findFirst();

		Character frequentCharacter = entry.get().getKey();

		System.out.println("Most Frequent Character is " + frequentCharacter);

		int startIndex = s.indexOf(frequentCharacter);
		String subs = s.substring(startIndex);

		System.out.println("subs " + subs);

		int deleteFromIndex = IntStream.range(0, subs.length())
				.filter(index -> (char) subs.charAt(index) != frequentCharacter.charValue()).findFirst().getAsInt();

		String stringToDelete = subs.substring(deleteFromIndex, deleteFromIndex + k);

		String newFrequentString = subs.replaceAll(stringToDelete, "");

		System.out.println("newFrequentString " + newFrequentString);

		map = s.chars().mapToObj(c -> (char) c).filter(c -> c != frequentCharacter).collect(Collectors.toList())
				.stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

		System.out.println("new map " + map);

		List<String> result = map.entrySet().stream().map(etry -> etry.getValue() <= 1 ? ("" + (char) etry.getKey())
				: ("" + etry.getValue() + (char) etry.getKey())).collect(Collectors.toList());
		result.add(newFrequentString.length() + "" + newFrequentString.charAt(0));

		System.out.println("result " + result);